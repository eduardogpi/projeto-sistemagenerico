<?php

namespace Source\User;

class User{
    private $firstName ="";
    private $lastName ="";

    public function getFirstName(){
        return $this->firstName;
    }

    public function getLastName(){
        return $this->lastName;
    }

    public function setFirstName(String $firstName){
        $this->firstName = $firstName;
    }

    public function setLastName(String $lastName){
        $this->lastName = $lastName;
    }
}
?>