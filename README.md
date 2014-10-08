#Imse

##Launch

Open <code>index.html</code>. Locally works only on Firefox, but when on a server environment also on other browsers. Application starts on the #/palette and then proceeds to #/search. In the #/search-future is the interface for the current and future result.

##Development

Start by running 
<pre>npm install</pre>

##API endpoints

###POST /palette

*Request (JSON):*
<pre>
palette: [
  {
    hex: '#FFFFFF'
  },
  {
    hex: '#000000'
  },
  ...
]
</pre>

###GET /search

*Response (JSON):*
<pre>
images: [
  {
    sequence: 1,
    src: 'cat.jpg'
  },
  {
    sequence: 2,
    src: 'dog.jpg'
  },
  ...
]
</pre>

##POST /next

*Request (JSON):*
<pre>
feedback: [
  {
   sequence: 1,
   value: 10
  },
  {
    sequence: 2,
    value: 4
  },
  ...
]
</pre>

*Response (JSON):*

(The next set of images)

<pre>
images: [
  {
    sequence: 1,
    src: 'cat.jpg'
  },
  {
    sequence: 2,
    src: 'dog.jpg'
  },
  ...
]
</pre>

## POST /future

*Request (JSON):*

(Current feedback)

<pre>
feedback: [
  {
   sequence: 1,
   value: 10
  },
  {
    sequence: 2,
    value: 4
  },
  ...
]
</pre>

*Response (JSON):*

(Future images)

<pre>
images: [
  {
    sequence: 1,
    src: 'cat.jpg'
  },
  {
    sequence: 2,
    src: 'dog.jpg'
  },
  ...
]
</pre>

