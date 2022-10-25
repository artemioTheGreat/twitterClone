class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def userpage
    render 'userFeedsPage'
  end
end
