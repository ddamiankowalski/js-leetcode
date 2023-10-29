export const measurePerformance = (callback) => {
    const start = performance.now();
    callback();
    const end = performance.now() - start;
}