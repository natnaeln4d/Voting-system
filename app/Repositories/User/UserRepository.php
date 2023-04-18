<?php 

namespace App\Repositories\User;
use App\Models\User;
use App\Services\HashService;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Candidate\CandidateRepositoryInterface;

class UserRepository implements UserRepositoryInterface{
  
    private $user;
    private $hashService;

    public function __construct(User $user, HashService $hashService){
       
       $this->user = $user;
       $this->hashService = $hashService;
    }
    

    public function findUserWhere($data){
    
        return $this->user->where([
                'email'=> $data['email'],
                'isActive' => 1
        ])->with('photos','role.roleable')->first();
      
    }
    
    public function findUserById($id){
        
        return $this->user->where([
                    'id'=> $id
          ])->with('photos','role.roleable')->first();
    }
    public function findUser($id,$status){
       
        return $this->user->where([
                        'id'=> $id,
                        'isActive' => $status
          ])->with('photos','role.roleable')->first();
    }
    public function getAllActiveUsers(){
        
        return $this->user->where([
                'isActive' => 1
          ])->with('photos','role.roleable')->get();
        
    }
    public function getAllUsers(){
        
        return $this->user->with('photos','role.roleable')
                          ->get();
        
    }
    public function getAllInactiveUsers(){
       
        return $this->user->where([
                'isActive' => 0
         ])->with('photos','role.roleable')->get();
       
    }
    
    public function storeUser($data){
       
       return $this->user->create([
                'first_name'=> $data['first_name'],
                'last_name'=> $data['last_name'],
                'email'=> $data['email'],
                'password'=>  $this->hashService->makeHash($data['password']),
                'faceId' => 'kjioa9aeodw3098imzknj'
       ]);
    }
    
    public function getCurrentlyAuthenticatedUser(){
       
       return Auth::user();
       
    }
    
   public function updateUserPassword($user, $data){
    
       return $user->update([
            'password' => $this->hashService->makeHash($data['password'])
        ]);
    }
    
    public function getActiveNotBannedWhereRole($role){
        
        return $this->user->with('role.roleable','photos')
                          ->where([
                                   'isActive' => true,
                                   'isBanned' => false,
                                   'isDeleted' => false
                                   ])
                          ->whereHas('role.roleable',function($query){
                                 $query->where('role',$role);
                         })->get();
            }
            
    public function getActiveNotBannedWhereRoleWith($role){
         
         return;
    }        
            
    public function findActiveNotBannedWhereRole($id, $role){
        
        return $this->user->with('role.roleable','photos')
                          ->where([
                                   'id' => $id,
                                   'isActive' => true,
                                   'isBanned' => false,
                                   'isDeleted' => false
                                   ])
                          ->whereHas('role.roleable',function($query){
                                 $query->where('role',$role);
                         })->first();
            }
            
    public function findActiveNotBannedWhereRoleWith($id, $role){
        
        return $this->user->with('role.roleable.chairman','photos')
                          ->where([
                                    'id' => $id,
                                    'isActive' => true,
                                    'isBanned' => false,
                                    'isDeleted' => false
                               ])
                          ->whereHas('role.roleable',function($query){
                                  $query->where('role',$role);
                        })->first();
    }
    
    public function destroyUser($user){
        
        return $user->update([
                    'isDeleted' => true,
                    'deleted_at'  => Carbon::now() 
                ]);
    }
}