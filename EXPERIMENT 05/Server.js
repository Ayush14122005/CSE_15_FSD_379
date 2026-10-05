const http = require("http");

let students = [
    {
        id: 1,
        name: "Ayush",
        course: "CSE"
    }
];

function sendJSON(res, statusCode, data) {

    res.writeHead(statusCode, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify(data));
}


const server = http.createServer((req, res) => {

    const urlParts = req.url.split("/").filter(Boolean);

    const resource = urlParts[0];

    const id = urlParts[1]
        ? Number(urlParts[1])
        : null;


    // -------------------------
    // GET /students
    // -------------------------

    if (req.method === "GET" &&
        resource === "students" &&
        !id) {

        return sendJSON(res, 200, students);
    }


    // -------------------------
    // POST /students
    // -------------------------

    if (req.method === "POST" &&
        resource === "students" &&
        !id) {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            try {

                const newStudent = JSON.parse(body);

                newStudent.id = students.length + 1;

                students.push(newStudent);

                sendJSON(res, 201, {
                    message: "Student added successfully",
                    student: newStudent
                });

            } catch (error) {

                sendJSON(res, 400, {
                    message: "Invalid JSON"
                });

            }

        });

        return;
    }


    // -------------------------
    // PUT /students/:id
    // -------------------------

    if (req.method === "PUT" &&
        resource === "students" &&
        id) {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            try {

                const updatedData = JSON.parse(body);

                const index = students.findIndex(
                    student => student.id === id
                );

                if (index === -1) {

                    return sendJSON(res, 404, {
                        message: "Student not found"
                    });

                }

                students[index] = {
                    ...students[index],
                    ...updatedData,
                    id: id
                };

                sendJSON(res, 200, {
                    message: "Student updated successfully",
                    student: students[index]
                });

            } catch (error) {

                sendJSON(res, 400, {
                    message: "Invalid JSON"
                });

            }

        });

        return;
    }


    // -------------------------
    // DELETE /students/:id
    // -------------------------

    if (req.method === "DELETE" &&
        resource === "students" &&
        id) {

        const index = students.findIndex(
            student => student.id === id
        );

        if (index === -1) {

            return sendJSON(res, 404, {
                message: "Student not found"
            });

        }

        const deletedStudent = students.splice(index, 1)[0];

        return sendJSON(res, 200, {
            message: "Student deleted successfully",
            student: deletedStudent
        });
    }


    // -------------------------
    // 404
    // -------------------------

    sendJSON(res, 404, {
        message: "Route not found"
    });

});


server.listen(3000, () => {

    console.log("Server running at:");
    console.log("http://localhost:3000");

    console.log("\nAvailable Routes:");

    console.log("GET    /students");
    console.log("POST   /students");
    console.log("PUT    /students/:id");
    console.log("DELETE /students/:id");

});