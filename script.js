function isValidHexColor(color) {
    const regex = /^#([0-9A-Fa-f]{3}){1,2}$/i;
    return regex.test(color);
}

document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const colorInput = document.getElementById('colorInput');
    const colorPicker = document.getElementById('colorPicker');

    colorPicker.addEventListener('input', function() {
        const colorValue = colorPicker.value;
        document.body.style.backgroundColor = colorValue;
    });

    changeColorBtn.addEventListener('click', function() {
        const colorValue = colorInput.value.trim();

        if (!isValidHexColor(colorValue)) {
            alert(colorValue ? 'Invalid hex color code. Please use the format #XXXXXX or #XXX.' : 'Please enter a valid hex color code.');
            return;
        }

        document.body.style.backgroundColor = colorValue;
    });
});