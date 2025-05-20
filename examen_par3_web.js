document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const hoursInput = document.getElementById('hours');
    const vehicleTypeSelect = document.getElementById('vehicle-type');
    const totalSpan = document.getElementById('total');
    
    calculateBtn.addEventListener('click', calculateTotal);
    
    function calculateTotal() {
        // Validar campos
        if (!hoursInput.value || !vehicleTypeSelect.value) {
            alert('Por favor complete todos los campos obligatorios.');
            return;
        }
        
        const hours = parseInt(hoursInput.value);
        const vehicleType = vehicleTypeSelect.value;
        
        if (hours <= 0) {
            alert('Por favor ingrese un número válido de horas.');
            return;
        }
        
        // Definir precios por hora
        const rates = {
            'auto': 20,
            'camioneta': 30,
            'camion': 40
        };
        
        // Calcular total
        const rate = rates[vehicleType];
        const total = hours * rate;
        
        // Mostrar resultado
        totalSpan.textContent = `$${total.toFixed(2)}`;
    }
});