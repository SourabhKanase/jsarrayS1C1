const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers

  function printDeveloper() {
     let arr=[];
     for(let i=0;i<data.length;i++)
        { 
            let element1=data[i];
            let x=element1.profession;
            if(x == "developer")
            {
               arr.push[data[i]];
            //    console.log(data[i]);
            }
        }
        return arr;
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter name:");
    const age = parseInt(prompt("Enter age:"));
    const profession = prompt("Enter profession:");
    
    data.push({ name, age, profession });
  }
  
  
  // 3. Remove Admins
  function removeAdmin() {
    let arr=[];
    for(let i=0;i<data.length;i++)
       { 
           let element1=data[i];
           let x=element1.profession;
           if(x != "admin")
           {
              arr.push[data[i]];
              console.log(data[i]);
           }
       }
       return arr;
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    // let arr=[1,2,3];
    // let arr1=[...[1,2,3],4,5,6];
    // console.log(arr1);
    const dummyArray = [
        { name: "Alice", age: 30, profession: "developer" },
        { name: "Bob", age: 35, profession: "admin" },
      ];
      
      let concatenatedArray = data.concat(dummyArray);
      console.log(concatenatedArray);
  }
  
  // 5. Average Age
  function averageAge() {
    let count=0;
    let sum=0;
    for(let i=0;i<data.length;i++)
    {
           let element1=data[i];
           let x=element1.age;
           count++;
           sum=sum+x;
          
    }
    return sum/count;
    // console.log(sum/count)
  }
  
  
  // 6. Age Check
  function checkAgeAbove25() {
    for(let i=0;i<data.length;i++)
    {
           let element1=data[i];
           let x=element1.age;
           if(x>25)
           {
            return true;
           }
    }
    return false;
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let arr=[];
     for(let i=0;i<data.length;i++)
        { 
            let element1=data[i];
            let x=element1.profession;
            arr.push(x);
            
        }
        // return arr;
        console.log(arr);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    
     for(let i=0;i<data.length;i++)
        { 
            let element1=data[i];
            let x=element1.name;
            if(x == "john")
            {
               data[i].name="sourabh";
            //    console.log(data[i]);
            }
        }
       console.log(data);
       
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let arr=[];
    for(let i=0;i<data.length;i++)
    {
        let element1=data[i];
        let x=element1.profession;
        arr.push(x);
    }
    arr.sort();
    let count=0;
    for(let i=0;i<data.length;i++)
    {
        if(arr[i] != arr[i+1])
        {
            count++;
        }
    }
    console.log(count);
  }
 