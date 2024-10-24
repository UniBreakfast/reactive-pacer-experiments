import {Activity} from './classes/activity.js';

import {prepareStory1} from './stories/story1.js';

const story1 = prepareStory1({Activity});

story1.runThrough();
