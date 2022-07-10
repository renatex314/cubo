let gyroscope = new Gyroscope({frequency: 60});

gyroscope.addEventListener('reading', e => alert(gyroscope.x));
gyroscope.start();