.DEFAULT_GOAL := help

APP ?=
ENV ?= production

.PHONY: help deploy deploy-investments deploy-help-center

help:
	@printf '%s\n' \
	  'make deploy APP=investments ENV=production' \
	  'make deploy APP=help-center ENV=production'

deploy:
	@test -n "$(APP)" || (printf '%s\n' 'APP is required: make deploy APP=investments' >&2; exit 2)
	@./scripts/deploy/railway.sh "$(APP)" "$(ENV)"

deploy-investments:
	@$(MAKE) deploy APP=investments ENV=$(ENV)

deploy-help-center:
	@$(MAKE) deploy APP=help-center ENV=$(ENV)
