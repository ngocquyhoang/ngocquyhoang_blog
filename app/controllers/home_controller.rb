class HomeController < ApplicationController
	def index
	end

	def send_message
		if params[:name].present? && params[:email].present? && params[:subject].present? && params[:message].present?
			message = ContactMessage.new
			message.name = params[:name]
			message.email = params[:email]
			message.subject = params[:subject]
			message.message = params[:message]
			if message.save
				render json:{notice: "success"}
			else
				render json:{notice: "error"}
			end
		else
			render json:{notice: "error"}
		end
	end
end
