const deliveryAsap = document.getElementById('delivery_asap');
const deliverySpecific = document.getElementById('delivery_specific');
const deliveryTimeInput = document.getElementById('delivery_time_input');
const timeLabel = document.getElementById('time_label');
const deliveryTimeHint = document.getElementById('delivery_time_hint');

deliveryTimeInput.style.display = 'none';
timeLabel.style.display = 'none';
deliveryTimeHint.style.display = 'none';

function handleDeliveryTimeToggle() {
    if (deliveryAsap.checked) {
        deliveryTimeInput.style.display = 'none';
        timeLabel.style.display = 'none';
        deliveryTimeHint.style.display = 'none'; 
        deliveryTimeInput.value = '';
    } else if (deliverySpecific.checked) {
        deliveryTimeInput.style.display = 'block';
        timeLabel.style.display = 'block';
        deliveryTimeHint.style.display = 'block'; 
    }
}

deliveryAsap.addEventListener('change', handleDeliveryTimeToggle);
deliverySpecific.addEventListener('change', handleDeliveryTimeToggle);