export const server = "http://31.220.48.248";

const apiList = {
  login: `${server}/auth/login`,
  signup: `${server}/auth/signup`,
  uploadResume: `${server}/upload/resume`,
  uploadProfileImage: `${server}/upload/profile`,
  jobs: `${server}/api/jobs`,
  applications: `${server}/api/applications`,
  rating: `${server}/api/rating`,
  user: `${server}/api/user`,
  applicants: `${server}/api/applicants`,
  sendotp:`${server}/api/sendotp`
};

export default apiList;
