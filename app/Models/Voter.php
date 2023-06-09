<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voter extends Model
{
    use HasFactory;
    
    protected $fillable = [ 
                            'vote_id',
                            'sex',
                            'role',
                            'status',
                            'isApproved',
                            'approvedBy',
                            'approved_at',
                            'deleted_at'
                 ];

  public function roles(){
   
    return $this->morphOne(Role::class,'roleable');
    
  }
  
  public function files(){
    return $this->morphMany(File::class,'fileable');
  }
  
  public function vote(){
      
    return $this->belongsTo(Vote::class);
 }
 
   public function chairman(){
   
       return $this->belongsTo(User::class,'approvedBy');
   }
   
   public function registered(){
      
       return $this->belongsToMany(RegisteredVoter::class);
   }
  
}
