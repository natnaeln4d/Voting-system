<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
                        'first_name',
                        'last_name',
                        'email',
                        'password',
                        'faceId',
                        'isActive',
                        'isDeleted',
                        'deleted_at',
                        'isBanned',
                        'banned_at',
       ];

    
    protected $hidden = [
                    'password',
                    'remember_token',
                    'faceId',
                    'isActive',
                    'isDeleted',
                    'deleted_at',
                    'isBanned',
                    'banned_at',
                    'email_verified_at'
    ];

    
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    
    public function role(){
      return $this->hasOne(Role::class);
    }
    
    public function photos(){
    
       return $this->hasMany(Photo::class);
    }
    
    public function voteBallots(){
    
        return $this->belongsToMany(VoteBallot::class,'candidate_vote_ballot');
        
    }
}
