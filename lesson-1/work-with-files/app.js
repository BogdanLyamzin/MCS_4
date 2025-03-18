// import fs from "node:fs";
import fs from "node:fs/promises";
import DetectFileEncodingAndLanguage from "detect-file-encoding-and-language";

const fileOperations = async ()=> {
    // const buffer = await fs.readFile("./files/file.txt");
    // const text = buffer.toString();
    // console.log(text);
    // const text = await fs.readFile("./files/file.txt", "utf-8");
    // console.log(text);
    // const {encoding} = await DetectFileEncodingAndLanguage("./files/file.txt");
    // const text = await fs.readFile("./files/file.txt", encoding);
    // console.log(text);
    // await fs.appendFile("./files/file.txt", "\nJS forever");
    // await fs.writeFile("./files/file.txt", "Mojo the best");
    // await fs.readFile("./files/file4.txt");
    // fs.appendFile("./files/file2.txt", "\nJS forever");
    // await fs.writeFile("./files/file3.txt", "Mojo the best");
    // await fs.unlink("./files/file3.txt");
}

fileOperations();

// fs.readFile("./files/file.txt")
//     .then(data => {
//         fs.writeFile("./files/file4.txt", data)
//             .then()
//             .catch()
//     })
//     .catch(error => console.log(error.message));

// fs.readFile("./files/file.txt", (error, data)=> {
//     console.log(error);
//     console.log(data);
//     fs.writeFle("./files/file4.txt", ()=> {})
// })