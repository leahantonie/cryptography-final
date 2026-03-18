// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CABToken is ERC20 {
    constructor(address initialOwner) ERC20("Cryptography and Blockchain Token", "CAB") {
        _mint(initialOwner, 1000000 * 10 ** decimals());
    }
}
