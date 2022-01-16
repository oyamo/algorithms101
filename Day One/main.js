/**

 mkdir algorithms101 && cd algorithms101
 echo "# algorithms101" >> README.md
 git init
 git add README.md
 git commit -m "first commit"
 git branch -b annah
 git remote add origin https://github.com/annmweru/algorithms101.git
 git push -u origin annah


 error: failed to push some refs to 'https://github.com/annmweru/algorithms101.git'




 */



var calPoints = function (ops) {
    let lastItem;
    let secondLastItem;
    let result = 0;
    const record = [];

    for(let i = 0; i < ops.length; i++) {
        lastItem = Number(record[record.length - 1]);
        secondLastItem = Number(record[record.length - 2]);

        if(/\d/.test(ops[i])) {
            record.push(Number(ops[i]))
        } else if(ops[i] === 'C') {
            record.pop()
        } else if(ops[i] === 'D') {
            record.push(lastItem * 2)
            console.log(record)
        } else if(ops[i] === '+') {
            record.push(lastItem + secondLastItem)
        }
    }


    for (let i = 0; i < record.length; i++) {
        result += record[i]
    }

    return result;
}

let ans1 = calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])

console.log("First answer",ans1)
