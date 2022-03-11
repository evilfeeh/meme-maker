import memeMaker from '@erickwendel/meme-maker'

const options = {
    image: './images/the-what.jpg', // Required
    outfile: 'the-what-meme.png', // Required
    topText: '"2022 world war"'
}

memeMaker(options).then(_ => {
    console.log('Image saved: ' + options.outfile)
  }).catch(error => console.log(error));
