// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract SimpleStorage {
    uint256 favoriteNummber;
    mapping(string => uint256) public nametoFavoriteNumber;

    struct People {
        string name;
        uint256 favoritNumber;
    }

    People[] public people;

    function store(uint256 _favoriteNumber) public {
        favoriteNummber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNummber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_name, _favoriteNumber));
        nametoFavoriteNumber[_name] = _favoriteNumber;
    }
}
