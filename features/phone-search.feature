Feature: Search for a phone

Scenario: Search for a phone
	Given I am on the phonecat page
	When I search for a phone
	Then I should a filtered phone list
