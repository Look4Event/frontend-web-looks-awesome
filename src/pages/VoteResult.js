let DUMMY_DATA = {
    "votes": 44,
    "result": [
        {
            "category": "indoor",
            "votes": 11,
            "subcategories": [
                {
                    "name": "Escape Room",
                    "votes": 5,
                }, 
                {
                    "name": "Archery",
                    "votes": 2,
                }, 
                {
                    "name": "Escape Room",
                    "votes": 2,
                },
                {
                    "name": "others",
                    "votes": 2,
                },
            ]
        },
        {
            "category": "food",
            "votes": 12,
            "subcategories": [
                {
                    "name": "Dim Sum",
                    "votes": 2,
                }, 
                {
                    "name": "Chinese Food",
                    "votes": 6,
                }, 
                {
                    "name": "Italia Food",
                    "votes": 3,
                },
                {
                    "name": "others",
                    "votes": 1,
                },
            ]
        },
        {
            "category": "drink",
            "votes": 21,
            "subcategories": [
                {
                    "name": "Thai Boba",
                    "votes": 3,
                }, 
                {
                    "name": "Fruit Tea",
                    "votes": 6,
                }, 
                {
                    "name": "Shaved Ice",
                    "votes": 7,
                },
                {
                    "name": "Coffee",
                    "votes": 4,
                },
                {
                    "name": "others",
                    "votes": 1,
                },
            ]
        }
    ]
};

function VoteResultPage() {
    
    return <h1>This is the page where our vote result will display.</h1>;
}

export default VoteResultPage;