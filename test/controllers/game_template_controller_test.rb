require 'test_helper'

class GameTemplateControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get battle" do
    get :battle
    assert_response :success
  end

  test "should get menu" do
    get :menu
    assert_response :success
  end

  test "should get map" do
    get :map
    assert_response :success
  end

end
