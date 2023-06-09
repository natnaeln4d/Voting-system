<?php 

namespace App\Repositories\Candidate;

Interface CandidateRepositoryInterface{
    
    public function findCandidateWhereActive($id);
    public function getAllCandidates();
    public function getAllActiveCandidates();
    public function getAllInActiveCandidates();
    public function approveCandidateWhereId($candidate, $id);
    public function storeCandidate($data);
}