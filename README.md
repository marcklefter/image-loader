# image-loader
Library for loading images via URL and reporting loading status.

## Usage
The library consists of a single method `imageLoader`, invoked as follows:

```javascript
imageLoader(
    [ /* list of image URLs */ ],
    (imageUrl, index, status) => {
        // imageUrl is the image URL for which status is being reported.
        // index if the position of imageUrl in the list of image URLs.
        // status is one of the following: 'loading', 'loaded', 'failed'.
    },
    results => {
    	// results = [{
    	// 	imageUrl,
    	// 	index,
    	// 	status	// final loading status
		// }] 	
    }
)
```

See `index.html` for a complete example of how to use this library.