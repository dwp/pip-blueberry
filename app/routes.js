//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// NHS routes

router.post('/hcp-now-answer-1', function(request, response) {

	var HcpNow = request.session.data['HcpNow']
	if (HcpNow == "yes"){
		response.redirect("/nhs-consent/v1/main-health-care-professional")
	} else {
		response.redirect("/nhs-consent/v1/explain-steps-reg-hig")
	}
})

router.post('/hcp-now-answer-2', function(request, response) {

	var HcpNow = request.session.data['HcpNow']
	if (HcpNow == "yes"){
		response.redirect("/nhs-consent/v2/main-health-care-professional")
	} else {
		response.redirect("/nhs-consent/v2/explain-steps-reg-hig")
	}
})