function isValidHexColor(color) {
    const regex = /^#([0-9A-Fa-f]{3}){1,2}$/i;
    return regex.test(color);
}

document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const colorInput = document.getElementById('colorInput');

    changeColorBtn.addEventListener('click', function() {
        const colorValue = colorInput.value.trim();

        if (!colorValue) {
            alert('Please enter a valid hex color code.');
            return;
        }

        if (!isValidHexColor(colorValue)) {
            alert('Invalid hex color code. Please use the format #XXXXXX or #XXX.');
            return;
        }

        document.body.style.backgroundColor = colorValue;
    });
});