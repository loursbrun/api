/**
 * Created by fabienbrun on 29/01/16.
 */
require('useful-date');
require('useful-date/locale/en-US.js');










var dossiers = [
    { value: "RECEPTION", label: 'Boite de réception' },
    { value: "ARCHIVES", label: "Archives" },
    { value: "ENVOYES", label: "Envoyés" },
    { value: "SPAM", label: "Courrier indésirable" }
];

var contacts = [ "Sangoku", "Chichi", "Bulma", "Krilin", "Tenchinan", "Yamcha", "Tortue Géniale", "Maître Kaio", "Picollo", "Sangohan", "Végéta", "Freezer", "Dendé", "Trunks", "C-16", "C-17", "C-18", "Cell", "Sangoten", "Videl", "Kaio Shin", "Boo" ];
var objet1 = [ "Salut", "Bonjour", "What's up", "Bien ou bien", "Yo", "Quoi de neuf", "Ca va", "Give me news", "Hello", "Qu'est-ce que tu veux" ];
var objet2 = [ "mon cher", "gros", "ma gueule", "man", "mec", "mon vieux", "bro", "vieille branche", "tocard", "grand galopin", "fumier" ];
var contenuMail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>.";

var idProchainMail = 1;
var emailsParDossier = null;

var rand = function(max) {
    return Math.floor(Math.random() * max);
}

var randInArray = function(arr) {
    return arr[rand(arr.length)];
}

var randDateInLastMonth = function() {
    var date = new Date();
    date.setDate(date.getDate() - rand(30));
    date.setHours(rand(24) - 1);
    date.setMinutes(rand(60) - 1);
    return date;
}

exports.genererMails = function() {
    emailsParDossier = {};

    for (var i in dossiers) {
        var valDossier = dossiers[i].value;
        emailsParDossier[valDossier] = [];
        var nbMails = rand(10); // Entre 1 et 10 mails
        for (var j = 0; j < nbMails; j++) {

            var mail = {
                id: idProchainMail,
                from: valDossier == "ENVOYES" ? "Rudy" : randInArray(contacts),
                to: valDossier == "ENVOYES" ? randInArray(contacts) : "Rudy",
                subject: randInArray(objet1) + " " + randInArray(objet2),
                date: randDateInLastMonth(),
                content: contenuMail
            };

            emailsParDossier[valDossier].push(mail);

            idProchainMail++;
        }
    }
};



// Json object table
var tables = {
    RECEPTION: [
        {
            id: 1,
            from: "Coco",
            to: "Rudy",
            subject: "Quoi de neuf mon vieux",
            date: "2016-01-15T11:35:02.492Z",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
        },
        {
            id: 2,
            from: "Dendé",
            to: "Rudy",
            subject: "Yo vieille branche",
            date: "2016-01-16T13:59:02.493Z",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
        }
    ],
    ARCHIVES: [
        {
            id: 1,
            from: "Coco",
            to: "Rudy",
            subject: "Quoi de neuf mon vieux",
            date: "2016-01-15T11:35:02.492Z",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
        },
        {
            id: 2,
            from: "Dendé",
            to: "Rudy",
            subject: "Yo vieille branche",
            date: "2016-01-16T13:59:02.493Z",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
        }
    ],
    ENVOYES: [
        {
            id: 3,
            from: "Rudy",
            to: "Boo",
            subject: "Quoi de neuf tocard",
            date: "2016-01-16T20:57:02.493Z",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
        },
        {
            id: 4,
            from: "Rudy",
            to: "Trunks",
            subject: "Yo grand galopin",
            date: "2016-01-28T06:05:02.493Z",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
        },
        {
            id: 5,
            from: "Rudy",
            to: "Kaio Shin",
            subject: "Ca va mec",
            date: "2016-01-24T21:28:02.493Z",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
        },
        {
            id: 6,
            from: "Rudy",
            to: "Maître Kaio",
            subject: "Ca va vieille branche",
            date: "2016-01-04T20:46:02.493Z",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
        }
    ],
    SPAM: [
        {
            id: 7,
            from: "C-16",
            to: "Rudy",
            subject: "Ca va mon vieux",
            date: "2016-01-19T19:31:02.493Z",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
        },
        {
            id: 8,
            from: "Tortue Géniale",
            to: "Rudy",
            subject: "Bien ou bien vieille branche",
            date: "2016-01-22T13:28:02.493Z",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
        },
        {
            id: 9,
            from: "Végéta",
            to: "Rudy",
            subject: "What's up vieille branche",
            date: "2016-01-11T19:39:02.493Z",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
        },
        {
            id: 10,
            from: "C-18",
            to: "Rudy",
            subject: "Hello man",
            date: "2016-01-01T20:41:02.493Z",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
        },
        {
            id: 11,
            from: "Tenchinan",
            to: "Rudy",
            subject: "Bien ou bien bro",
            date: "2016-01-17T22:09:02.493Z",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
        }
    ]
};





// Export all tables
exports.getTables = function(req, res) {
    res.send(tables);
};


// Export tables names
exports.getTablesNames = function(req, res) {
    res.send(Object.getOwnPropertyNames(tables));
};



exports.getDossiers = function(req, res) {
    res.send(dossiers);
    //res.writeHead(404);
    //res.end("Not found !");
};

exports.getDossier = function(req, res) {

    var idDossier = req.params.idDossier;
    var emails = emailsParDossier[idDossier];
    res.send( { value: idDossier, emails: emails });
}

exports.getMail = function(req, res) {
    var dossier = emailsParDossier[req.params.idDossier];
    var mail = null;
    for (var i in dossier) {
        var unMail = dossier[i];
        if (unMail.id == req.params.idMail) {
            mail = unMail;
        }
    }
    res.send(mail);
}

exports.envoiMail = function(req, res) {
    var dossierEnvoyes = emailsParDossier["ENVOYES"];
    var mail = req.body;
    mail.id = idProchainMail;
    dossierEnvoyes.push(mail);

    idProchainMail++;
    res.send({ succes: true, email: req.body });
}