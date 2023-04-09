<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;
    
    protected $fillable = [ 
                           'chairman_id',
                            'sex',
                            'role',
                            'status',
                            'approved_at',
                            'deleted_at',
                            'admission_year',
                            'educational_year',
                            'department',
                            'gpa',
                            'exam_score',
                            'candidates_description',
                            'strategic_plan',
                            'isApproved',
                            'approvedBy',
                            'approved_at'
                  ];
                  
       public function role(){
        
         return $this->morphOne(Role::class,'roleable');
         
      }
      
      public function files(){
         return $this->morphMany(File::class,'fileable');
      }
      
   
      public function vote(){
      
         return $this->belongsTo(Vote::class);
      }
      
      public function voteBallots(){
      
         return $this->belongsToMany(VoteBallot::class);
      }
}
