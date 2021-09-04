let students=[
    {
        slno:1,
        name:"Dinga",
        image:"https://cdn.pixabay.com/photo/2017/03/31/17/45/avatar-2191935__340.png",
        dept:"CSE",
        marks:620
    },
    {
        slno:2,
        name:"Sheela",
        image:"https://cdn.pixabay.com/photo/2017/03/31/17/44/avatar-2191933__340.png",
        dept:"ISE",
        marks:520
    },
    {
        slno:3,
        name:"Jhon",
        image:"https://cdn.pixabay.com/photo/2021/05/29/15/35/man-6293669__340.png",
        dept:"ISE",
        marks:520
    },
    {
        slno:4,
        name:"Nick",
        image:"https://cdn.pixabay.com/photo/2021/03/11/07/37/man-6086415__340.png",
        dept:"ISE",
        marks:520
    },
    {
        slno:5,
        name:"Miller",
        image:"https://cdn.pixabay.com/photo/2017/03/31/17/44/avatar-2191934__340.png",
        dept:"ISE",
        marks:520
    },
    {
        slno:6,
        name:"Smith",
        image:"https://media.istockphoto.com/photos/business-man-avatar-icon-3d-illustration-isolated-on-white-background-picture-id1306619362?b=1&k=20&m=1306619362&s=170667a&w=0&h=WeHSy3Bb2e7sNXFA2G_VGch2Lm1iavAUyK3d1C6H1xQ=",
        dept:"ISE",
        marks:520
    },
    
];


let mainDiv=document.getElementById("mainDiv");

let table=document.createElement("table");
let trheading=document.createElement("tr");

let thSl=document.createElement("th");
thSl.innerHTML="SL NO";
trheading.append(thSl);

let thName=document.createElement("th");
thName.innerHTML="Name";
trheading.append(thName);

let thImage=document.createElement("th");
thImage.innerHTML="Photo";
trheading.append(thImage);

let thDept=document.createElement("th");
thDept.innerHTML="Department";
trheading.append(thDept);

let thMarks=document.createElement("th");
thMarks.innerHTML="Marks";
trheading.append(thMarks);

table.append(trheading);
mainDiv.append(table);


for (const student of students) {
    let trdata=document.createElement("tr");

    let tdsl=document.createElement("td");
    tdsl.append(student.slno)
    trdata.append(tdsl);

    let tdname=document.createElement("td");
    tdname.append(student.name)
    trdata.append(tdname);

    let tdImage=document.createElement("td");
    let img=document.createElement("img");
    img.src=student.image;
    img.height=200;
    img.width=200;
    tdImage.append(img)
    trdata.append(tdImage);

    let tdDept=document.createElement("td");
    tdDept.append(student.dept);
    trdata.append(tdDept);

    let tdMarks=document.createElement("td");
    tdMarks.append(student.marks)
    trdata.append(tdMarks);


    table.append(trdata)

    console.log(student.name);
}

