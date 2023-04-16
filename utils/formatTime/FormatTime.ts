const pad = (num: number) => `0${num}`.slice(-2);

export default function(timeInSeconds: number) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds - (60 * minutes);

    return `${pad(minutes)}:${pad(seconds)}`;
}
