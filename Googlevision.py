import os
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/home/neuralnine/Documents/Programming/NeuralNine/Python/Current/neuralninevisionproject-72fc9fefff49.json"

from google.cloud import vision

def detect_labels(path):
    """Detects labels in the file."""
    client = vision.ImageAnnotatorClient()

    with open(path, "rb") as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    response = client.label_detection(image=image)
    labels = response.label_annotations
    print("Labels:")

    for label in labels:
        print(label.description)

    if response.error.message:
        raise Exception(
            "{}\nFor more info on error messages, check: "
            "https://cloud.google.com/apis/design/errors".format(response.error.message)
        )

# Llamadas a la función con tres imágenes
print(detect_labels("1.jpg"))
print(detect_labels("2.jpg"))
print(detect_labels("3.jpg"))
