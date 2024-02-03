import { formatDistanceToNow } from 'date-fns'

export function formatDateDistanceToNow(dateString: string) {
  const formattedDate = formatDistanceToNow(new Date(dateString), { addSuffix: true })
  return formattedDate;
}


// Write some tests. Unit, Integration, E2E, anything that ensures that your code is unbreakable.
// Containerize the entire website and make it run flawlessly on any machine.
// Document your code. Use any format you know of to generate documentation that allow us to peek under the hood.
// Include any SEO strategy, and show off your score in any popular tool.
// Create configuration for different environments, and optimize your code for production usage.


// Send a link to your recruiter pointing to your repository (Github or Bitbucket). The master branch should contain the entire result, along with the instructions to run your code on the README.md file (if apples).
