export const measurePerformance = (callback) => {
    const start = performance.now();
    callback();
    return performance.now() - start;
}