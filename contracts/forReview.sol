// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract ArticleReview {
    uint public articleCount = 0;
    
    struct Article {
        address owner;
        string ipfsHash;
        uint version;
        bool isReviewed;
    }

    mapping (uint => Article) private articles;

    event DeployArticleToPool(string ipfsHash, uint version);
    
    function addArticle( string memory _ipfsHash, uint _version) public {
        require(bytes(_ipfsHash).length > 0, "IPFS hash cannot be empty");

        articleCount++;
        articles[articleCount] = Article(msg.sender, _ipfsHash, _version, false);

    }
    function getMyArticles() public view returns (string[] memory, uint[] memory, bool[] memory, uint) {
    uint myArticleCount = 0;
    for (uint i = 1; i <= articleCount; i++) {
        if (articles[i].owner == msg.sender) {
            myArticleCount++;
        }
        
    }

    if (myArticleCount == 0) {
        return (new string[](0), new uint[](0), new bool[](0), uint (0));
    }

    string[] memory myIpfsHashes = new string[](myArticleCount);
    uint[] memory myVersions = new uint[](myArticleCount);
    bool[] memory myIsReviewed = new bool[](myArticleCount);

    uint j = 0;
    for (uint i = 1; i <= articleCount; i++) {
        if (articles[i].owner == msg.sender) {
            myIpfsHashes[j] = articles[i].ipfsHash;
            myVersions[j] = articles[i].version;
            myIsReviewed[j] = articles[i].isReviewed;
            j++;
        }
    }

    return (myIpfsHashes, myVersions, myIsReviewed, myArticleCount);
}

}
