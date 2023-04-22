import keras
from keras.saving.experimental.saving_lib import load_mode

keras.models.load_model('Model/keras_model.h5')
model = load_model('my_model.h5')
model.evaluate()

