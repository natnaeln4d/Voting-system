<?php

namespace App\Factory\UserFactory;

use Illuminate\Support\Facades\DB;
use App\Factory\UserFactory\UserFactory;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Role\RoleRepositoryInterface;
use App\Repositories\Chairman\ChairmanRepositoryInterface;

use App\Models\User;


class ChairmanFactory implements UserFactory{
    
    private $userRepository;
    private $roleRepository;
    private $chairmanRepository;
    
    public function __construct(
        UserRepositoryInterface $userRepository, 
        ChairmanRepositoryInterface $chairmanRepository,
        RoleRepositoryInterface $roleRepository,
        ){
            
            $this->userRepository = $userRepository;
            $this->roleRepository = $roleRepository;
            $this->chairmanRepository = $chairmanRepository;
     
    }
    
    public function create(array $data): User{
          DB::beginTransaction();
            $user = $this->userRepository->storeUser($data); 
            $chairman = $this->chairmanRepository->storeChairman($data);
            $role = $this->roleRepository->storeRole($chairman, $user->id);
            
         if(!$user | !$chairman | !$role){
           
           DB::rollback(); 
         }   
           DB::commit();
            $user = $this->userRepository->findUserById($user->id);
            
        return $user;
      
    }
}