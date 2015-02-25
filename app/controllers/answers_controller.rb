class AnswersController < ApplicationController
  def show
    answer = Answer
      .where(question_id: params[:question_id])
      .find(params[:id])
    render json: answer, status: 200
  end

  def index
    answers = Answer.where(question_id: params[:question_id])
    render json: answers, status: 200
  end

  def create
    Answer.create(
      question_id: params[:question_id],
      title: params[:title],
      content: params[:content],
      user_id: params[:user_id]
      )
  end

  def new
    @answer = Answer.new
  end

  def delete
    Answer.find(params[:id]).destroy
  end

  def edit
    Anwser.find(params[:id]).update(title: params[:title], content: params[:content])
  end
end
