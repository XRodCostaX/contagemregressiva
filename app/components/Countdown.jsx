'use client';
import { useEffect, useState } from 'react';

const Countdown = () => {
    const targetDate = new Date('2023-12-22T18:00:00').getTime(); // Data e hora-alvo em milissegundos
    const currentDate = new Date().getTime(); // Data e hora atuais em milissegundos
    const timeRemaining = targetDate - currentDate; // Tempo restante em milissegundos

    const [countdown, setCountdown] = useState(timeRemaining);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1000); // Diminuir 1 segundo a cada 1000 milissegundos
            }
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, [countdown]);

    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

    return (
        <div className="text-4xl  text-slate-950 text-center border-8 rounded-2xl border-emerald-500 h-56 p-6">
            <h1 className="my-6 text-orange-700">
                CONTAGEM REGRESSIVA PARA O RECESSO
            </h1>
            {days} dias, {hours} horas, {minutes} minutos, {seconds} segundos
        </div>
    );
};

export default Countdown;
