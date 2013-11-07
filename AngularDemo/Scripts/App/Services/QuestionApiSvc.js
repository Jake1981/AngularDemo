CM.Main.factory('MockedQuestionApiSvc', [function () {

    var list =  [{ id: 1, createdOn : new Date('2013-11-07 15:00:00'), text: 'Reverse vasectomy, is it possible?', postedBy: 'Ken', replys: [{ answer: "Noooooo!!", postedBy : 'Kens Wife', votes : 1 }] },
                { id: 2, createdOn : new Date('2013-11-07 14:00:00'), text: 'Can I marry Toby once the gay laws are passed?', postedBy: 'Jason', replys : [{ answer : "Yes I will", postedBy : 'Toby', votes : 2 }] },
                { id: 3, createdOn : new Date('2013-11-07 13:00:00'), text: 'How can I beat Jake at table tennis?', postedBy: 'Phil and Ken', replys: [{ answer: "You can't", postedBy: 'Jake', votes : 0 }] },
                { id : 4, createdOn : new Date('2013-11-07 15:47:00'), text : 'When is my new Dad coming home?', postedBy : 'Adham', replys : [{ answer : "Soon my son", postedBy : 'Jake', votes : 1 }, { answer : "Cant wait!!", postedBy : 'Adhams Mum', votes : 100 }]}
    ];

    function get(id) {
        if (id === undefined) return list;
        return list.filter(function (item) {
            return item.id == id;
        })[0];
    }
    
    return {
        get: get
    };
}]);