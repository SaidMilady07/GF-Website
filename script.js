    let currentNumber = '';
        
        function appendNumber(num) {
            currentNumber += num;
            document.getElementById('numberDisplay').textContent = currentNumber;
        }
        
        function clearDisplay() {
            currentNumber = '';
            document.getElementById('numberDisplay').textContent = '';
        }
        
        function checkNumber() {
            if (currentNumber === '2909') { // Angka rahasia, bisa diganti
                nextPage(2);
            } else {
                alert('Angka salah! Coba lagi.');
                clearDisplay();
            }
        }

        function nextPage(pageNumber) {
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            document.getElementById('page' + pageNumber).classList.add('active');
             if (pageNumber === 2) {
                startTypewriter();
            }
        }
let i = 0;
        const txt = 'Haloow Sayangkuh. Ciee ulangtahun! umurmu sekarang berarti 20 tahun ya. anjer udah tuaaa:v selamat ulang tahun ya semoga panjang umur, sehat selalu, bahagia terus, dan semua cita-citamu tercapai. aku sayang kamuuuuuu. jangan tinggalin aku yaa T_T'; // Teks yang akan dianimasikand
        const speed = 50; // Kecepatan (ms per karakter)
        
        function startTypewriter() {
            document.getElementById('animatedText').textContent = ''; // Reset teks
            i = 0;
            typeWriter();
        }
        
        function typeWriter() {
            if (i < txt.length) {
                document.getElementById('animatedText').textContent += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }