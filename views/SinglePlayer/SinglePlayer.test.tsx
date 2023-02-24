import SinglePlayer from './SinglePlayer';

/** Unit tests might be a bit redundant here. Many of the internal
 * components are fully tested, So the main thing to test is the score change.
 *
 * At this point, I'm looking into a state management solution that I can use to
 * maintain, load, and serialize game state.
 * TO-DO: Design test suite.
 */
describe('Single Player UX', () => {
  it('should be defined', () => {
    expect(SinglePlayer).toBeDefined();
  })
});
