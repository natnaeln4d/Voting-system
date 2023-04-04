<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Votes extends Model
{
    use HasFactory;
    
    protected $fillable = [
                           'voter_id',
                           'candidate_id',
                           'vote_start_date',
                           'vote_end_date',
                           'voteCanceled',
                           'vote_canceled_at', 
                           'vote_cancelation_cause',
                           'confirmed',
                           'confirmed_at',
                           'confirmed_by',
                           'vote_status'
                     ];
    
    public function voter(){
    
         return $this->belongsTo(Voter::class,'voter_id');
     }
     
     public function candidate(){
     
         return $this->belongsTo(Candidate::class,'candidate_id'); 
     }
     
     public function candidates(){
     
        return $this->hasMany(Candidate::class);
     }
     
     public function voters(){
       
       return $this->hasMany(Voter::class);
    }
}
