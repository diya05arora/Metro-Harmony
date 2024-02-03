document.addEventListener("DOMContentLoaded", function () {
    const dataUrl = "METRO_DATA.xlsx";

    function fetchData(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";

        xhr.onload = function (e) {
            var arraybuffer = xhr.response;
            var data = new Uint8Array(arraybuffer);
            var arr = [];
            for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, { type: "binary" });
            var firstSheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[firstSheetName];
            var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            callback(jsonData);
        };

        xhr.send();
    }

    function populateDropdown(elementId, data) {
        const dropdown = document.getElementById(elementId);
        data.forEach((row) => {
            const option = document.createElement("option");
            option.value = row[0];
            option.text = row[0];
            dropdown.appendChild(option);
        });
    }

    function updateLineInput(selectedStation, data) {
        const lineInput = document.getElementById("line");

        const selectedRow = data.find((row) => row[0] === selectedStation);

        if (selectedRow) {
            lineInput.value = selectedRow[1];
        } else {
            lineInput.value = "";
        }
    }

    fetchData(dataUrl, function (data) {
        populateDropdown("from", data);
        populateDropdown("to", data);

        const fromDropdown = document.getElementById("from");
        fromDropdown.addEventListener("change", function () {
            const selectedStation = fromDropdown.value;
            updateLineInput(selectedStation, data);
        });
    });
});
