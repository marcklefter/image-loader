const imageLoader = (images, onStatusChanged, onCompleted) => {
    const promises = [];

    images.forEach((imageUrl, i) => {
        const p = new Promise((resolve, reject) => {
            const image = new Image();
            
            image.onload
                = () => {
                    onStatusChanged(imageUrl, i, 'loaded');

                    resolve({
                        image: imageUrl,
                        index: i,

                        status: 'loaded'
                    })
                };

            image.onerror
                = () => {
                    onStatusChanged(imageUrl, i, 'failed');

                    reject({
                        image: imageUrl,
                        index: i,

                        status: 'failed'
                    })
                }

            image.src = imageUrl;
        });

        promises.push(p);

        onStatusChanged(imageUrl, i, 'loading');
    });

    Promise.all(promises.map(p => p.catch(e => e)))
        .then(results => onCompleted(results));
};