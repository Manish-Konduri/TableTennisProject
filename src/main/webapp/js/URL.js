const app = document.getElementById('content')

function built(data, r, m) {
    for (var i = r; i < m; i++) {


        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', 'idcard');

        const contet = document.createElement('contet');
        contet.setAttribute('class', 'container');

        //const moreInfo = document.createElement('button');
        //moreInfo.setAttribute('id', 'moreInfo');
        //moreInfo.innerHTML = "MoreInfo";

        image = AddImage();

        h4 = AddName(data[i]);

        p1 = addTeamName(data[i]);

        p = AddEmail(data[i]);

        Phone = AddPhone(data[i]);

        Gender = addSkill(data[i]);
        contentAppend(app, card, contet,image, h4, p, p1, Phone, Gender);

    }

}

function AddImage() {

        image = document.createElement('img');
        image.src = "images/propic.png";
        image.setAttribute('class', 'img');

        console.log(image)
        return image


//    else {
//        no_image = document.createElement('div');
//        temimg = document.createElement('div')
//        temimg.setAttribute('class', 'inside');
//
//        temimg.textContent = q.name.first[0] + q.name.last[0];
//        no_image.setAttribute('class', 'propic');
//        no_image.appendChild(temimg)
//        contet.appendChild(no_image);
//    }
}
function AddName(q) {
    const h4 = document.createElement('h4');
    h4.setAttribute('class','name')
    h4.textContent = q.Name;
    console.log(h4)
    return h4;

}

function addTeamName(q) {

    const p1 = document.createElement('p');
    p1.setAttribute('class','TeamName')
    p1.textContent = "Team Name: " + q.Team_Name;
    console.log(p1)

    return p1;
}

function AddEmail(q) {

    const p = document.createElement('p');
    p.setAttribute('class', 'EMAIL')
    p.textContent = "E-mail: " + q.Email;
    console.log(p)
    return p;
}

function AddPhone(q) {
    const p = document.createElement('p');
    p.setAttribute('class', 'Phone');
    p.textContent = "Phone: " + q.Phone;
    console.log(p)
    return p;

}

function addSkill(q) {
    const Gender = document.createElement('p');
    Gender.setAttribute('class', 'Skill');
    Gender.textContent = "Skill: " + q.skill;
    return Gender;
}

function contentAppend(app, card, contet,image, h4, p, p1, Phone, Gender) {
    card.appendChild(image)
    contet.appendChild(h4)
    contet.appendChild(p)
    contet.appendChild(p1)
    contet.appendChild(Phone)
    contet.appendChild(Gender)
    card.appendChild(contet)
    app.appendChild(card)
}



