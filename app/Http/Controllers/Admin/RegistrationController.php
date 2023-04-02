<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Hash;
use App\Models\User;
use App\Models\Voter;

class RegistrationController extends Controller{
 
 
          //  Registering Voters
    public function registerVoter(Request $request){
        try{
        
        /*
        |------------------------------------------------------------------------------------|
        |                  Validating the inputs on the backend                              |
        |------------------------------------------------------------------------------------|
        |  name => is requires cant be empty, string, max length less than 255 characters    |
        |  email => is requires cant be empty, string, max length less than 255 characters,  |
        |          no duplicate value allowed                                                |
        |  password => is requires cant be empty, string, min length is 8 characters         |
        |                                                                                    | 
        |------------------------------------------------------------------------------------|
        */ 
            $uservalidator=Validator::make($request->all(),[
                'first_name' => ['required', 'string', 'max:255'],
                'last_name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required','string','min:8'],
            ]);

            if($uservalidator->fails()){
                return response()->json([
                    "status"=>false,
                    "message"=>"valitor error",
                    "error"=>$uservalidator->errors()
                ],404);
            }
            $user=User::create(
                [
                    'first_name'=>$request->first_name,
                    'last_name'=>$request->last_name,
                    'email'=>$request->email,
                    'password'=>Hash::make($request->password),
                    'faceId' => 'kjioa9aeodw3098imzknj'
                   ]
                );
        /*|---------------------------------------------------------------------------|
          |  if the registration fails return error message else return newly creared |
          |  user with token                                                          |
          |---------------------------------------------------------------------------|
        
        */ 
                if(!$user){
                   return response()->json([
                      'status' => 'fail',
                      'message' => 'Oops! something went wrong, try again'
                   ],400);
                }
        $voter = Voter::create([
                        'sex' => 'male',
                        'role' => 'voter',
                        'status' => true,
        ]);
        
        if(!$voter){
            
        }
        
        $role = $voter->role()->create([
            'user_id' => $user->id
        ]);
        
        if(!$role){
        
        }
               
  
        /*|----------------------------------------------------------------------------------------|
          |  if the user is sucrssfully registered a unique token is created and send to the       |
          |  user before being encrypted and then encrypted and stored in the database,            | 
          |  and the token is attached on the http header and sent for every request made by the   |
          |  client                                                                                | 
          |----------------------------------------------------------------------------------------|
        
        */ 
        
        $voter = User::with('photos','role.roleable')
                      ->where([
                          'id' => $user->id,
                          'isActive' => true
                      ])->first();
                      
                      
            return response()->json([
                'status'=> 'sucess',
                'message'=>'user created succesfully',
                'voter' => $voter,
                'token'=>$user->createtoken('user_token')->plainTextToken
            ] ,201);
        }
        catch(\Exception $exception){
            return response()->json([
                "status"=>true,
                "message"=>$exception->getMessage()
            ],500);
        }
    }
}