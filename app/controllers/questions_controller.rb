class QuestionsController < ApplicationController
  def show
  end

  def index
    questions = Question.all
    render json: questions, status: 200
  end

  def create
  end

  def new
  end

  def delete
  end

  def edit
  end
end
