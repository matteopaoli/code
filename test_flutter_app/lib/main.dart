import 'package:flutter/material.dart';

void main() {
  const app = App();
  runApp(app);
}

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.amber,
          title: const Text('Hello, World!'),
        ),
      ),
    );
  }
}