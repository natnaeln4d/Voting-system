<?php

namespace App\Repositories\Voter;

use App\Repositories\Voter\VoterRepositoryInterface;
use App\Models\Voter;

class VoterRepository implements VoterRepositoryInterface{

  private $voter;
  
  public function __construct(Voter $voter){
     
     $this->voter = $voter;
  }
  
  public function findVoterWhereActive($id){
     
    return $this->voter->where('id',$id)
                       ->with('role.user.photos')
                       ->whereHas('role.user',function($query){
                                 $query->where('isActive',true);  
                            })->first();
  }
  public function getAllActiveVoters(){
     
    return $this->voter->with('role.user.photos')
                       ->whereHas('role.user',function($query){
                                $query->where('isActive',true);  
                        })->get();
  }
  public function getAllInActiveVoters(){
      
    return $this->voter->with('role.user.photos')
                       ->whereHas('role.user',function($query){
                               $query->where('isActive',false);  
                        })->get();
   }
   
   public function getAllVoters(){
        
        return $this->voter->with('role.user.photos')
                           ->get();
   }
  
}